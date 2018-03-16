
//Creation Projet
	ng new oc-angular-act01 --style=scss --skip-tests=true

//Creation Github repo
	echo "# oc-angular-act01" >> README.md
	git init
	git add README.md
	git commit -m "first commit"
	git remote add origin git@github.com:sounboul/oc-angular-act01.git
	git push -u origin master


//Installation Bootstrap
	npm install bootstrap@3.3.7 --save

//Creation Type model post
	ng generate class model/post --type=model
//Configuraiton model type post
	export class Post {
		title: string;
	  	content: string;
	  	loveIts: number;
	  	created_at: Date;

	  	constructor(title: string, content: string, loveIts: number = 0 ){
	  		this.title = title;
	  		this.content = content;
	  		this.loveIts = loveIts;
	  		this.created_at = new Date();  		
	  	}
	}



//Creation de liste des poste à mettre sur appcomponent
//Exemple
		post1 = new Post('Mon premier post',`Lorem ipsum dolor sit ame...`,1);
		posts = [this.post1,this.post2,this.post3];

//Creation PostListComponent et PostListItemComponent 
ng generate component postList
ng generate component postListItem


//Configuration PostListComponent
	//Component ts
	@Input() posts: Post;

	//post-list html
	<div class="container">
		<div class="row">
		    <div class="col-xs-12">
		      	<ul class="list-group">
					<app-post-list-item 
						*ngFor="let post of posts" 
						[title]="post.title" 
						[content]="post.content" 
						[loveIts]="post.loveIts"  
						[created_at]="post.created_at" >	
					</app-post-list-item>  
				</ul>
			</div>
		</div>
	</div>

//Configuration PostListItemComponent
	//Component ts
	
	  @Input() title: string;
	  @Input() content: string;
	  @Input() loveIts: number;
	  @Input() created_at: Date;

	  constructor() { }

	  ngOnInit() {
	  }

	  getColor() {
	  	if(this.loveIts>0){
	  		return 'green';
	  	}else if(this.loveIts<0){
	  		return 'red';
	  	}else{
	    	return '';  
	  	}
	  }

	  yLoveIts(){
	  	 this.loveIts++;
	  }

	  yDontLoveIts(){
	  	 this.loveIts--;
	  }

	//post-list html
	<li [ngClass]="{'list-group-item': true,
                'list-group-item-success': loveIts>0,
	                'list-group-item-danger': loveIts<0
	                }"> 
	    <div class="row">
	    	<div class="col-md-12">
		    	<div class="pull-left">
		   			<h4 [ngStyle]="{color: getColor()}" >{{ title }} {{loveIts}}</h4>
		    	</div>
		    	<div class="pull-right">
		    		<span>{{ created_at |  date: 'short' }} </span>  
		    	</div>   		              	
		    </div>
		    <div class="col-md-12">
		    	<p [ngStyle]="{color: getColor()}" >{{ content }}</p>
		    </div>
	    </div>
	    <button class="btn btn-success" (click)="yLoveIts()" >Love it !</button>
	    <button class="btn btn-danger" (click)="yDontLoveIts()" >Don't love it !</button>  
	</li>



