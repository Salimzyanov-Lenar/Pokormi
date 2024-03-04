# middlewares.py

from django.middleware.common import MiddlewareMixin


class CorsMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        response["Access-Control-Allow-Origin"] = "*"  # Разрешить доступ из любого источника
        return response
