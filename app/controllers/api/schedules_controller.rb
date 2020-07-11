class Api::SchedulesController < ApplicationController
  before_action :set_vehicle
  before_action :set_schedule

  def index
    render json: @vehicle.schedules
  end

  def create
    @users = User.all - @vehicle.users
    @schedule.new(schedule_params)
    if @schedule.save
      render json: @schedule
    else
      render json: { errors: @schedule.errors }, status: unprocessable_entity
    end
  end

  def update
    if @schedule.update(schedule_params)
      render json: @schedule
    else
      render json: { errors: @schedule.errors }, status: unprocessable_entity
    end
  end

  def destroy
    @schedule.destroy
    render json: { message: 'This scheduled service has been removed' }
  end

  private

  def set_vehicle
    @vehicle = Vehicle.find(params[:vehicle_id])
  end

  def set_schedule
    @schedule = @vehicle.schedules.find(params[:id])
  end

  def schedule_params
    params.require(:schedule).permit(:last_name)
  end

end
