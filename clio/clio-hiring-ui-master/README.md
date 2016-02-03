# Clio Hiring Project

This project involves creating a simulator for a simple state machine, then
writing the back end of a Rails web interface for it.

If you have any questions about the project specifications, please email
us; we'll be happy to clarify.

## Environment Requirements

The app must run on:

* Ruby >= 2.1.4
  * Feel free to upgrade the Ruby version located in the Gemfile if you want.

* Rails >= 4.2.1
  * Feel free to upgrade the Rails version located in the Gemfile if you want.

* sqlite3
  * There is a `db/seeds.rb` file which you can use to modify seed data. This
    can be run with `rake db:seed`.

You will need to install `bundler` and do a `bundle install` in the
directory to get the required gems installed.

## Part 1: The simulator

You are going to create a state machine which simulates how the
pronunciation of the word "gif" is affected by peer pressure. People are
seated next to each other in a rectangular grid, and their opinions of how
to pronounce "gif" propagate based on the opinions of the people seated
around them. Over time, one pronunciation or another will eventually become
dominant.

The stub for this code is in lib/simulator.rb, and the specs are in
spec/lib/simulator.rb. You're welcome to add any helper classes or modules
that you deem necessary. In lib/simulator.rb, please implement the
following methods:

#### Simulator#initialize(seating_arrangement)

* `seating_arrangement` is an array of arrays which represents the people
  in the initial seating arrangement.

* Each element in the inner arrays is one of: `:hard`, `:soft`, or `:none`.

#### Simulator#verdict

* If the majority of opinionated people think it is a hard G, it returns `:hard`.

* If the majority of opinionated people think it is a soft G, it returns `:soft`.

* If the opinions are equal then return `:none`.

#### Simulator#state

* Returns an array of arrays which represents the people in the current
  seating arrangement.

#### Simulator#next

* Updates the opinions of all of the people in the simulator's seating
  arrangement based on the rules below.

### Underlying assumptions

* There will be an NxM seating arrangement.

* A neighbour is an adjacent person in the seating arrangement (including diagonals).

* There are hard edges in the seating arrangement (no wrapping around).

* Each person can either think "gif" is pronounced with a hard G, a soft G,
  or they can not have an opinion.

* All state transitions happen simultaneously.

### Rules of the simulation

* If a person with an opinion has fewer than 2 opinionated neighbours, then
  they stop having an opinion since there are not enough people to argue
  with.

* If a person with an opinion has more than 3 opinionated neighbours, then
  they stop having an opinion since their opinion is drowned out by their
  neighbours.

* If a person without an opinion has exactly 3 opinionated neighbours and
  at least 2 of them think "gif" is pronounced with a hard G, then they
  form an opinion that it is pronounced with a hard G.

* If a person without an opinion has exactly 3 opinionated neighbours and
  at least 2 of them think "gif" is pronounced with a soft G, then they
  form an opinion that it is pronounced with a soft G.

### Testing

While you're working on this part of the project, you can run the
simulator specs with:
```
bundle exec rspec spec/lib/simulator_spec.rb
```
Feel free to add more specs to it if you see a need.

## Part 2: The web interface

We're going to put a web interface around the simulator so that people can
create and run these simulations through their web browsers. The front end
has already been provided for you, so you don't need to worry about the
HTML or Javascript, but the back end is just stubbed out at the moment.
Places which need your attention are marked by the word `FIXME` in the
source code. As before, feel free to add any helper classes or modules that
you find necessary, to add or update any gems in the Gemfile, or to change
the Ruby version.

### Requirements

* The site has multiple users. Each user should be able to have their own
  simulations, and shouldn't be able to see or modify the simulations of
  other users. (You don't have to worry about adding functionality to add
  users, reset passwords, or other such ordinary user management tasks.)

* The user should be able to create new simulations with a name, a width,
  and a height. Each person in the new simulation's seating arrangement
  should have a random `:hard`, `:soft`, or `:none` opinion to start.

* The user should be able to delete their simulations.

* A simulation's current state should be recorded in the database.

* A user should be able to see the current state and the current verdict of
  a particular simulation.

* While the user is looking at a particular simulation, it should
  automatically and asynchronously update itself to the next state at a
  regular interval.

### Testing

Unlike part 1, the specs for the Rails stuff aren't provided for you;
you'll have to write them. Your specs should offer reasonable test coverage
of the code you have written.

Some useful links:
* http://guides.rubyonrails.org/testing.html
* https://www.codeschool.com/courses/testing-with-rspec
* http://www.anchor.com.au/wp-content/uploads/rspec_cheatsheet_attributed.pdf
