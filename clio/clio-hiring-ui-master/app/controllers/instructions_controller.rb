class InstructionsController < ApplicationController
  before_action :authenticate_user!, only: [:instructions]

  def show
  end
  
  
end
