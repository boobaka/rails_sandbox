class RegistrationsController < ApplicationController
    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            session[:user_id] = @user.id
            puts('>>>>>>>>>>>>>>>>>>>', session)
            redirect_to root_path, notice: "user was created" + session[:user_id].to_s
        else
            # flash[:alert] = 'something was wrong' # форма сама даст инфу что не так
            render :new
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end
end