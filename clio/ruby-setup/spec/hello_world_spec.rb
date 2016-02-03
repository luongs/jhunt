require 'spec_helper'

describe HelloWorld do
  
  describe "#execute" do
    
    it "prints hello world based off the supplied" do
      hello_world =HelloWorld.new(2)
      expect(hello_world).to receive(:puts).twice
      hello_world.execute
    end
    
  end

end
