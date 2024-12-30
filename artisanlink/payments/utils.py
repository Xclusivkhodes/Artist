import requests
from django.conf import settings

def initiate_mtn_payment(amount, phone_number, transaction_id):
    headers = {
        'Authorization': f"Bearer {get_mtn_token()}",
        'X-Reference-Id': transaction_id,
        'X-Target-Environment': 'sandbox',  # Change to 'production' in live mode
        'Ocp-Apim-Subscription-Key': settings.MTN_MOMO['PRIMARY_KEY'],
    }
    data = {
        "amount": str(amount),
        "currency": "EUR",
        "externalId": transaction_id,
        "payer": {
            "partyIdType": "MSISDN",
            "partyId": phone_number
        },
        "payerMessage": "Payment for ArtisanLink services",
        "payeeNote": "Thank you for your payment"
    }
    response = requests.post(settings.MTN_MOMO['COLLECTION_URL'], json=data, headers=headers)
    return response.json()

def get_mtn_token():
    headers = {
        'Authorization': f"Basic {settings.MTN_MOMO['API_KEY']}",
        'Ocp-Apim-Subscription-Key': settings.MTN_MOMO['PRIMARY_KEY'],
    }
    response = requests.post(settings.MTN_MOMO['TOKEN_URL'], headers=headers)
    return response.json().get('access_token')
