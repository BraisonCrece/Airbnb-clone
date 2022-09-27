# frozen_string_literal: true

module Api
  class UsersByEmailsController < ApplicationController
    def show      
      user = User.find_by!(email: params[:email])

      respond_to do |format|
        format.json do
          render json: user.to_json, status: :ok
        end
      end
    rescue ActiveRecord::RecordNotFound => e
      respond_to do |format|
        format.json do
          render json: { error: e.message }.to_json, status: 404
        end
      end
    end
  end
end