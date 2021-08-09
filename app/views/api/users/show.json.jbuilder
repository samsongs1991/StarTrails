# json.partial! "api/users/user", user: @user

json.extract! @user, :id, :email
# json.extract! @user.detail, :first_name