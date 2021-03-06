class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    helper_method :current_user, :signed_in?


    # -----------------------------------------------------------
    # to convert JS camel case to Ruby snake case in the params object
    
    # before_action :underscore_params!

    # def underscore_params!
    #   underscore_hash = -> (hash) do
    #     hash.transform_keys!(&:underscore)
    #     hash.each do |key, value|
    #       if value.is_a?(ActionController::Parameters)
    #         underscore_hash.call(value)
    #       elsif value.is_a?(Array)
    #         value.each do |item|
    #           next unless item.is_a?(ActionController::Parameters)
    #           underscore_hash.call(item)
    #         end
    #       end
    #     end
    #   end
    #   underscore_hash.call(params)
    # end
    
    # -----------------------------------------------------------


    private

    def current_user
        return nil if session[:session_token].nil?
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def signin(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def signout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def signed_in?
        !!current_user
    end

    def require_signed_in
        if current_user.nil?
            render json: { access: ["Must be signed in"] }, status: 401
        end
    end
    
end
