class UsersController < ApplicationController
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
  # takes a plaintext password and stores a hashed version as a password_digest
  def password=(new_password)
    self.password_digest = dumb_hash(new_password)
  end

  # checks if the hashed plaintext password matches the password_digest
  def authenticate(password)
    return nil unless dumb_hash(password) == password_digest
    self
  end
  def create
    user = User.create(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end
  private

  # the hashing method
  def dumb_hash(input)
    input.bytes.reduce(:+)
  end

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end