# == Schema Information
#
# Table name: annotations
#
#  id         :integer          not null, primary key
#  start_idx  :integer          not null
#  length     :integer          not null
#  content    :text             not null
#  stori_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Annotation < ApplicationRecord
  include Votable

  validates :start_idx, :length, :content, :stori, :user, presence: true

  belongs_to :stori
  belongs_to :user
end
