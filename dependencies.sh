#!/bin/bash

echo "Installing dependencies..."

npm i --save @nestjs/config &
npm i --save @nestjs/jwt &
npm i --save bcrypt @types/bcrypt &
npm i --save class-validator class-transformer &
npm i --save @nestjs/swagger &
npm i --save @nestjs/typeorm typeorm pg &

wait

echo "Dependencies installed successfully..."