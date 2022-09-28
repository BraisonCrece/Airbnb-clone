# frozen_string_literal: true
class HomeController < ApplicationController
  def index
    @properties = Property.all
  end
end
