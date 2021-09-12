<?php

use Illuminate\Database\Seeder;
use Faker\Generator\Factory;
use Illuminate\Support\Str;

use App\Todo;

class TodoSeeder extends Seeder
{
     public function run()
    {	

    	$faker = Faker\Factory::create();

    	for($i=0; 5>$i;$i++) {
			
	    	$todo = Todo::create([
			    'task' => $faker->word,
			]);

		}


    }

   
}
