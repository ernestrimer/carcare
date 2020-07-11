class Api::VehiclesController < ApplicationController
    before_action :set_user

    def index
      render json: @user.vehicles
    end

    def show
      render json: @user.vehicles = Vehicle.find(params[:id])
    end

    def create
        @vehicle = @user.vehicles.new(vehicle_params)
        if @vehicle.save
            render json: @vehicle
        else
          render json: { errors: @vehicle.errors }, status: unprocessable_entity
        end
    end

    def update
        @vehicle = Vehicle.find(params[:id])
        if @vehicle.update(vehicle_params)
          render json: @vehicle
        else
          render json: { errors: @vehicle.errors }, status: unprocessable_entity
        end
      end

    def destroy
        @user.vehicles.find(params[:id]).destroy
        render json: { message: 'vehicle deleted'}
    end

  private
  
    def vehicle_params
      params.require(:vehicle).permit(:year, :make, :model, :mileage)
    end
  
    def set_user
      @user = current_user
    end

  end


