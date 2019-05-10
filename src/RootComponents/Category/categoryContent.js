import React, { Component } from 'react';
import classify from 'src/classify';
import Gallery from 'src/components/Gallery';
//import Pagination from 'src/components/Pagination';
import defaultClasses from './category.css';

class CategoryContent extends Component {
    render() {
        const { classes, pageControl, data, pageSize } = this.props;
        const items = data ? data.category.products.items : null;
        const description = data ? data.category.description : null;
        const categoryTitle = data ? data.category.name : null;

        return (
            <article className={classes.root}>
                <h1 className={classes.title}>

                    {/* TODO: Switch to RichContent component from Peregrine when merged */}
                    <div className={classes.description}
                        dangerouslySetInnerHTML={{
                            __html: description
                        }}
                    />
                    <div className={classes.categoryTitle}>{categoryTitle}</div>
                </h1>
                <section className={classes.gallery}>
                
                </section>
                <div className={classes.pagination}>

                </div>
            </article>
        );
    }
}

export default classify(defaultClasses)(CategoryContent);
