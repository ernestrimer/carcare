class Service < ApplicationRecord
  belongs_to :vehicle
  has_many :schedules, dependent: :destroy
  has_many :vehicles, through: :schedules
end
