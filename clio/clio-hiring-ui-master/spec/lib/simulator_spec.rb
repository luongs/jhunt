require "spec_helper"

describe Simulator do
  let(:simulator) { Simulator.new(initial_state) }

  before { simulator.next }

  shared_examples "correct_state" do
    it "has the expected state" do
      expect(simulator.state).to eq resulting_state
      expect(simulator.verdict).to eq verdict
    end
  end

  context "#1" do
    let(:initial_state) do
      [
       [:soft, :hard, :none],
       [:hard, :none, :soft],
       [:none, :soft, :hard],
      ]
    end
    let(:resulting_state) do
      [
       [:soft, :hard, :none],
       [:hard, :none, :soft],
       [:none, :soft, :hard]
      ]
    end
    let(:verdict) { :none }

    include_examples "correct_state"
  end

  context "#2" do
    let(:initial_state) do
      [
       [:soft, :hard, :none],
       [:hard, :none, :soft],
       [:soft, :soft, :hard],
      ]
    end
    let(:resulting_state) do
      [
       [:soft, :hard, :none],
       [:none, :none, :soft],
       [:soft, :none, :hard]
      ]
    end
    let(:verdict) { :soft }

    include_examples "correct_state"
  end

  context "#3" do
    let(:initial_state) do
      [
       [:soft, :hard, :none, :soft],
       [:hard, :none, :soft, :hard],
       [:none, :none, :none, :soft],
       [:none, :soft, :hard, :none],
      ]
    end
    let(:resulting_state) do
      [
       [:soft, :hard, :none, :soft],
       [:hard, :none, :none, :hard],
       [:none, :none, :none, :soft],
       [:none, :none, :hard, :none],
      ]
    end
    let(:verdict) { :hard }

    include_examples "correct_state"
  end

  context "#4" do
    let(:initial_state) do
      [
       [:soft, :hard, :hard, :soft],
       [:none, :none, :none, :none],
       [:none, :none, :none, :none],
       [:hard, :soft, :hard, :soft],
      ]
    end
    let(:resulting_state) do
      [
       [:none, :hard, :hard, :none],
       [:none, :hard, :hard, :none],
       [:none, :hard, :soft, :none],
       [:none, :soft, :hard, :none],
      ]
    end
    let(:verdict) { :hard }

    include_examples "correct_state"
  end

  context "#5" do
    let(:initial_state) do
      [
       [:none, :hard, :hard, :none],
       [:none, :hard, :hard, :none],
       [:none, :soft, :soft, :none],
       [:none, :soft, :soft, :none],
      ]
    end
    let(:resulting_state) do
      [
       [:none, :hard, :hard, :none],
       [:hard, :none, :none, :hard],
       [:soft, :none, :none, :soft],
       [:none, :soft, :soft, :none],
      ]
    end
    let(:verdict) { :none }

    include_examples "correct_state"
  end

  context "#6" do
    let(:initial_state) do
      [
       [:none, :hard, :hard, :none],
       [:none, :hard, :soft, :soft],
      ]
    end
    let(:resulting_state) do
      [
       [:none, :hard, :none, :soft],
       [:none, :hard, :none, :soft],
      ]
    end
    let(:verdict) { :none }

    include_examples "correct_state"
  end

  context "#7" do
    let(:initial_state) do
      [
       [:none, :hard],
       [:hard, :soft],
       [:none, :hard],
       [:soft, :soft],
      ]
    end
    let(:resulting_state) do
      [
       [:hard, :hard],
       [:hard, :soft],
       [:none, :none],
       [:soft, :soft],
      ]
    end
    let(:verdict) { :none }

    include_examples "correct_state"
  end
end
