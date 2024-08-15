#!/bin/sh

# Wait until the database is ready
until npx prisma migrate dev --name init --create-only; do
  echo "Retrying migration after 5 seconds..."
  sleep 5
done

echo "Running migrations..."
npx prisma migrate dev

echo "Starting the application..."
npm run dev
