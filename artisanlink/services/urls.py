from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet

router = DefaultRouter()
router.register(r'', ServiceViewSet)

urlpatterns = router.urls
