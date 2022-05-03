require "test_helper"

class HorsesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @horse = horses(:one)
  end

  test "should get index" do
    get horses_url
    assert_response :success
  end

  test "should get new" do
    get new_horse_url
    assert_response :success
  end

  test "should create horse" do
    assert_difference("Horse.count") do
      post horses_url, params: { horse: { broker: @horse.broker, image: @horse.image, loacation: @horse.loacation, name: @horse.name, price: @horse.price } }
    end

    assert_redirected_to horse_url(Horse.last)
  end

  test "should show horse" do
    get horse_url(@horse)
    assert_response :success
  end

  test "should get edit" do
    get edit_horse_url(@horse)
    assert_response :success
  end

  test "should update horse" do
    patch horse_url(@horse), params: { horse: { broker: @horse.broker, image: @horse.image, loacation: @horse.loacation, name: @horse.name, price: @horse.price } }
    assert_redirected_to horse_url(@horse)
  end

  test "should destroy horse" do
    assert_difference("Horse.count", -1) do
      delete horse_url(@horse)
    end

    assert_redirected_to horses_url
  end
end
