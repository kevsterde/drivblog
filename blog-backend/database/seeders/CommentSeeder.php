<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $comments = [
            [
                'name' => 'John Doe',
                'content' => 'This article on long-haul trucking tips is fantastic! Learned a few new tricks.',
                'created_at' => now(),
                'updated_at' => now(),
                'parent_id' => null,
            ],
            [
                'name' => 'Jane Smith',
                'content' => 'Absolutely! Those tips on fuel efficiency were really helpful.',
                'created_at' => now(),
                'updated_at' => now(),
                'parent_id' => 1,
            ],
            [
                'name' => 'Alice Johnson',
                'content' => 'Yes, especially the section on managing routes. Saved me a lot of time on the road!',
                'created_at' => now(),
                'updated_at' => now(),
                'parent_id' => 2,
            ],
            [
                'name' => 'Mike Brown',
                'content' => 'What was your favorite tip from the article?',
                'created_at' => now(),
                'updated_at' => now(),
                'parent_id' => 3,
            ],
            [
                'name' => 'Emily Davis',
                'content' => 'I’m curious about the best ways to stay connected with family while on the road. Any advice?',
                'created_at' => now(),
                'updated_at' => now(),
                'parent_id' => null,
            ],
            [
                'name' => 'Robert White',
                'content' => 'Keeping a good schedule for video calls has worked well for me. Happy to share more tips!',
                'created_at' => now(),
                'updated_at' => now(),
                'parent_id' => 5,
            ],
            [
                'name' => 'Chris Green',
                'content' => 'Can you add some tips for staying healthy while trucking?',
                'created_at' => now(),
                'updated_at' => now(),
                'parent_id' => null,
            ],
        ];
        
        

        // Insert the comments into the database
        DB::table('comments')->insert($comments);
        
    }
}