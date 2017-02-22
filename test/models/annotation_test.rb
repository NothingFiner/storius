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

require 'test_helper'

class AnnotationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
