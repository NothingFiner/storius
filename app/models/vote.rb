class Vote < ApplicationRecord
  validates :user, :votable, :status, presence: true
end
