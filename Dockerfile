# Stage 1: Build the React app
FROM node:16-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the built app using a lightweight web server
FROM node:16-alpine

# Install serve to serve the build folder
RUN npm install -g serve

# Copy the build output from the previous stage
COPY --from=build /app/build /app/build

# Expose port 3000
EXPOSE 3000

# Command to serve the build folder
CMD ["serve", "-s", "/app/build"]