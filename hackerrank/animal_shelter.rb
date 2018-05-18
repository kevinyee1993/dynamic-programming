# Solution 1
# Space complexity: O(n) because creating 2 new queues for each animal
# Time complexities:
#   queue: O(1) because just need to do two operations per push
#   dequeueDog: O(1) because just need to simply shift the dog queue
#   dequeueCat: O(1) same reason as dequeueDog
#   dequeueAll: Worst case is O(n) because would need to dequeue all the
#               extra dogs/cats leftover that were not shifted off yet

class Dog

  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

class Cat
  attr_accessor :name

  def initialize(name)
    @name = name
  end

end


class AnimalShelter
  attr_accessor :dog_queue, :cat_queue, :all_queue

  def initialize()
    @dog_queue = []
    @cat_queue = []
    @all_queue = []
  end

  def enqueue(animal)
    @all_queue << animal

    if(animal.class == Dog)
      @dog_queue << animal
    elsif(animal.class == Cat)
      @cat_queue << animal
    end
  end

  def dequeueAny()
    checkAvailable()

    animal = @all_queue.shift()
    if(animal.class == Dog)
      @dog_queue.shift()
    elsif(animal.class == Cat)
      @cat_queue.shift()
    end
  end

  def dequeueDog()
    @dog_queue.shift()
  end

  def dequeueCat()
    @cat_queue.shift()
  end


  def checkAvailable()
    found_animal = false

    until(found_animal)
      return true if @all_queue.length == 0

      animal = @all_queue[0]
      if(animal.class == Dog && @dog_queue[0] == animal)
        found_animal = true
      elsif (animal.class == Cat && @cat_queue[0] == animal)
        found_animal = true
      else
        @all_queue.shift()
      end
    end

    found_animal
  end

end

shelter = AnimalShelter.new()
dog1 = Dog.new("kona")
cat1 = Cat.new("pingis")

shelter.enqueue(dog1)
shelter.enqueue(cat1)

p shelter.dog_queue
p shelter.cat_queue
p shelter.all_queue

shelter.dequeueCat()
p shelter.dog_queue
p shelter.cat_queue
p shelter.all_queue


shelter.dequeueAny()
p shelter.dog_queue
p shelter.cat_queue
p shelter.all_queue

shelter.dequeueAny()
p shelter.dog_queue
p shelter.cat_queue
p shelter.all_queue
