from django.urls import path

from .views.viewsCBV import CompanyDetailAPIView, CompanyListAPIView,VacancyDetailAPIView,VacancyListAPIView

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('companies/<int:id>/vacancies/', CompanyListAPIView.as_view()),
    path('companies', CompanyListAPIView.as_view()),
    path('companies/<int:company_id>/', CompanyDetailAPIView),
    path('vacancies', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),

    path('login', obtain_jwt_token)
]
