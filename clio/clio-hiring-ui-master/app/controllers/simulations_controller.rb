class SimulationsController < ApplicationController

  def index
    @simulations = Simulation.all
  end

  def new
    @simulation = Simulation.new
  end

  def create
    @simulation = Simulation.new(simulation_params)

    # fields submitted correctly
    if @simulation.save
      # redirect to index
      redirect_to @simulation
    else
      render 'new'
    end
  end

  def show
    @simulation = Simulation.find(params[:id])
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
