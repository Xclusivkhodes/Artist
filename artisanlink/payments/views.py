from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils.crypto import get_random_string
from .models import Transaction
from .utils import initiate_mtn_payment

class InitiatePaymentView(APIView):
    def post(self, request):
        user = request.user
        amount = request.data.get('amount')
        payment_method = request.data.get('payment_method')
        phone_number = request.data.get('phone_number', None)

        if not amount or not payment_method:
            return Response({"error": "Amount and payment method are required."}, status=status.HTTP_400_BAD_REQUEST)

        transaction_id = get_random_string(length=12)

        # Create transaction
        transaction = Transaction.objects.create(
            user=user,
            amount=amount,
            payment_method=payment_method,
            transaction_id=transaction_id
        )

        if payment_method == 'MTN_MOMO':
            response = initiate_mtn_payment(amount, phone_number, transaction_id)
            if response.get('status') == 'pending':
                return Response({"message": "Payment initiated. Await confirmation."}, status=status.HTTP_202_ACCEPTED)
            else:
                transaction.status = 'FAILED'
                transaction.save()
                return Response({"error": "Payment failed."}, status=status.HTTP_400_BAD_REQUEST)

        # Add similar logic for Vodafone Cash and Card Payments
        return Response({"message": "Payment method not implemented."}, status=status.HTTP_501_NOT_IMPLEMENTED)
