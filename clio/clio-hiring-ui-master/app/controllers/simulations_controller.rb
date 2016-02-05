class SimulationsController < ApplicationController

  def index
  end

  def new
    @simulation = Simulation.new
  end

  def create
    @simulation = Simulation.new(simulation_params)

    @simulation.save
    # redirect to index
    redirect_to @simulation
  end

  def show
  end

  def update
    # This should return a chunk of HTML containing the simulation grid and verdict.
    # (See app/views/simulations/show.html.erb.)
    raise NotImplementedError   # FIXME
  end

  def destroy
  end

  private
    def simulation_params
      params.require(:simulation).permit(:name, :width, :height)
    end

end
