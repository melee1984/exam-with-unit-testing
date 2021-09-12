<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Todo;
use Validator;

class TodoController extends Controller
{	
	/**
	 * Get the record from the todos
	 * @return [type] [description]
	 */
	public function index() {

		$data = array();
		$data['todos'] = Todo::select('id','task','done_at')->get();

		return response()->json($data, 200);
	}

	/**
	 * Insert statement 
	 * @param  Request $request [description]
	 * @return [type]           [description]
	 */
	public function store(Request $request) {

		$data = array();
		$data['status'] = 0;

		$validator = Validator::make($request->all(), [
            'task' => 'required|max:100',
        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'Validation Error']);
        }
        else {

        	$todo = Todo::create(['task' => $request->input('task')]);

        	if ($todo) {
        		$data['status'] = 1;	
        	}
			
		}

        return response()->json($data, 200);
	}	

	/**
	 * Insert statement 
	 * @param  Request $request [description]
	 * @return [type]           [description]
	 */
	public function update(Request $request, Todo $todo) {

		$data = array();
		$data['status'] = 0;

		$todo->done_at ==''? $todo->done_at = now(): $todo->done_at = null;
		// $todo->task = $request->input('task');
		$todo->save();

    	if ($todo) {
    		$data['status'] = 1;	
    	}
		
        return response()->json($data, 200);
	}	
	/**
	 * [destroy description]
	 * @param  Todo   $todo [description]
	 * @return [type]       [description]
	 */
	public function destroy(Todo $todo)	
    {	
    	$data = array();
    	if (!$todo) {
    		$data['status'] = 0;
    	}
    	else {
			$status = $todo->delete();
	        if ($status) {
	        	$data['status'] = 1;
	        	$data['message'] = __('Successfully deleted');
	        }
    	}
        
        return response()->json($data, 200);
    }   


}
