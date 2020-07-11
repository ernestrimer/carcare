class Api::ServicesController < ApplicationController

  def index
    render json: Service.all
  end

  def create
    @service = Service.new(service_params)
    if @service.save
      render json: @service
    else
      render json: { errors: @service.errors }, status: unprocessable_entity
    end
  end

  def update
    @service = Service.find(params[:id])
    if @service.update(service_params)
      render json: @service
    else
      render json: { errors: @service.errors }, status: unprocessable_entity
    end
  end

  def destroy
    Service.find(params[:id]).destroy
    render json: { messsage: 'Service deleted' }
  end
  
  private
    def service_params
      params.require(:service).permit(:task, :description, :frequency)
    end
end


