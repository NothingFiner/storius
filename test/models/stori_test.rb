# == Schema Information
#
# Table name: storis
#
#  id               :integer          not null, primary key
#  title            :string           not null
#  author           :string           not null
#  content          :text             not null
#  image_url        :string
#  header_image_url :string
#  tags             :text             default("{}"), is an Array
#  audio_video      :json             default("{}")
#  metadata         :json             default("{}")
#  user_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'test_helper'

class StoriTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
