# ==== CONFIGURE DEPLOY =====
# # Use a Node 16 base image
# FROM node:16-alpine as builder
# # Set the working directory to /app inside the container
# WORKDIR /app
# # Copy app files
# COPY . .
# # Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
# RUN npm ci 
# # Build the app
# RUN npm run build

# # Bundle static assets with nginx
# FROM nginx:1.21.0-alpine as production
# ENV NODE_ENV production
# # Copy built assets from `builder` image
# COPY --from=builder /app/build /usr/share/nginx/html
# # Add your nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# # Expose port
# EXPOSE 80
# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]

# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine as builder
ENV NODE_ENV=development
# Set the working directory to /app inside the container
WORKDIR /keeptrack
# Copy app files
COPY . .
# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Install dependencies
RUN npm install
# Deploy app for local development
CMD npm start --host 0.0.0.0 --port 3000