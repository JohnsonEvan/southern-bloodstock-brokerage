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

  private

  # the hashing method
  def dumb_hash(input)
    input.bytes.reduce(:+)
  end

  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end