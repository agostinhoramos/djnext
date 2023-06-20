# Use the official NGINX image as the base image
FROM nginx

# Remove the default NGINX configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom NGINX configuration file
COPY src/web/nginx.conf /etc/nginx/conf.d/

# Copy the self-signed SSL certificate and key
COPY ssl/server.crt /etc/nginx/ssl/
COPY ssl/server.key /etc/nginx/ssl/

# Expose the necessary ports
EXPOSE 80
EXPOSE 443