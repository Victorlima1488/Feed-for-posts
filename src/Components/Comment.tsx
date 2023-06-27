import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentContent{
    content:String;
    onDeletComment: (comment:String) => void;
}

export function Comment({content, onDeletComment}:CommentContent){
    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment(){

        setLikeCount((state) =>{
            return state + 1
        })

    }

    function handleDeleteComment(){

        onDeletComment(content)
    }
    
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/victorlima1488.png" alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Victor Lima</strong>
                            <time title='09/06 às 13:27' dateTime='2023-06-09 13:24:40'>
                                 Cerca de 1 hora
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}