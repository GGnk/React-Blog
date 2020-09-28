import React from "react";
import { ArticleComponent } from './article';
import './articles.scss';

export const Articles = () => {
    const article = {
        id: 1,
        title: 'Первая статья',
        dateTime: '22/09/2020',
        content: 'Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent nascetur pulvinar sed, in dolor pede in aliquam, risus nec error quis pharetra. Eros metus quam augue suspendisse, metus rutrum risus erat in.  In ultrices quo ut lectus, etiam vestibulum urna a est, pretium luctus euismod nisl, pellentesque turpis hac ridiculus massa. Venenatis a taciti dolor platea, curabitur lorem platea urna odio, convallis sit pellentesque lacus proin. Et ipsum velit diam nulla, fringilla vel tincidunt vitae, elit turpis tellus vivamus, dictum adipiscing convallis magna id. Viverra eu amet sit, dignissim tincidunt volutpat nulla tincidunt, feugiat est erat dui tempor, fusce tortor auctor vestibulum. Venenatis praesent risus orci, ante nam volutpat erat. Cursus non mollis interdum maecenas, consequat imperdiet penatibus enim, tristique luctus tellus eos accumsan, ridiculus erat laoreet nunc.'
    };
    return (
        <div className='articles'>
            <ArticleComponent article={article} />
        </div>
    );
};
