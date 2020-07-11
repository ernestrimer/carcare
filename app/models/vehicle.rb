class Vehicle < ApplicationRecord
  belongs_to :user
  has_many :schedules, dependent: :destroy
  has_many :services, through: :schedules
end
