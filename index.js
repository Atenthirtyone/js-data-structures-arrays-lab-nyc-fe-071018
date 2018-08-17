// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name)
{
  drivers.push(name);
}

function destructivelyPrependDriver(name)
{
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver()
{
drivers.pop();
}

function destructivelyRemoveFirstDriver()
{
  drivers.shift();
}

function AppendDriver(name)
{
 const driversB = drivers.slice();
 driversB.push(name);
 return driversB;
}