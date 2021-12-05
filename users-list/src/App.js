import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
   
		return (
		    <div className="ui container comments">
		       <ApprovalCard>
		       <CommentDetail author="Jane" status="One bad chapter doesn’t mean your story is over." timeAgo="Active Today at 4:45" />
		       </ApprovalCard>

		       <ApprovalCard>
		       <CommentDetail author="Maxxx" status="Let’s just be who we are." timeAgo="Active Today at 7:30"/>
		       </ApprovalCard>

		       <ApprovalCard>
		       <CommentDetail author="Sam" status="Enjoying Life" timeAgo="Active Yesterday at 2:45"/>
		       </ApprovalCard>

		       <ApprovalCard>
		       <CommentDetail author="Jane" status="One bad chapter doesn’t mean your story is over." timeAgo="Active Today at 1:25" />
		       </ApprovalCard>

		       <ApprovalCard>
		       <CommentDetail author="Garry" status="I’m on a seafood diet. When I see food, I eat it." timeAgo="Active Today at 10:45" />
		       </ApprovalCard>

		       <ApprovalCard>
		       <CommentDetail author="Ben" status="Love For All, Hatred For None." timeAgo="Active Today at 4:27" />
		       </ApprovalCard>

		       <ApprovalCard>
		       <CommentDetail author="David" status="Never regret anything that made you smile" timeAgo="Active Today at 12:20" />
		       </ApprovalCard>

		       <ApprovalCard>
		       <CommentDetail author="Evelina" status="Simplicity is the ultimate sophistication." timeAgo="Active Today at 18:43" />
		       </ApprovalCard>

		       <ApprovalCard>
		       <CommentDetail author="Justin" status="Tough times never last but tough people do. " timeAgo="Active Today at 14:35" />
		       </ApprovalCard>

		       <ApprovalCard>
		       <CommentDetail author="Alex" status="Problems are not stop signs, they are guidelines." timeAgo="Active Today at 9:45" />
		       </ApprovalCard>
		</div>	
	);
}


export default App;