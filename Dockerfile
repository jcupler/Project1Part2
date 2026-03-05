FROM httpd:2.4.57-alpine
COPY /src /usr/share/apache2/htdocs
COPY httpd.conf /usr/local/apache2/conf/httpd.conf
EXPOSE 80
