class HelloWorld

  def initialize(times=1)
    @times = times
  end

  def execute
    @times.times.each do      
      puts "Hello World"
    end
  end

end
