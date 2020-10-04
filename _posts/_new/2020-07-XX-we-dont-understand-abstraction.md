---
title: We don't understand abstraction
published: false
description: How studying abstraction is the key to tame complexity.
tags: 
//cover_image: https://direct_url_to_image.jpg
---

We use it, we talk about it, we even give advice about it, and yet we don't
understand it well enough. There is no agreed, precise definition of
abstraction. Maybe the mathematics literature has a paper somewhere with a
beautiful, formal definition, but it hasn't emerged until now. And few people
seem to care.

Software is eating the world, but something is off. We should be able to write
code in a much better way. Computer programming is probably the only type of
engineering where projects might get abandoned because "we just couldn't do it".

What? Why not?!?

## Complexity

A car might seem complex, but it has [about 30.000 parts](https://www.quora.com/How-many-parts-does-a-car-have). 
Any piece of software doing anything worthwhile has millions of symbols, or
[tokens](https://en.wikipedia.org/wiki/Lexical_analysis#Token) (its code
"parts"). A software project like that is in the complexity league of a [Boeing
747](https://www.quora.com/How-many-parts-are-in-a-Boeing-747). And typically
only occupies a limited area of the full tech stack, which is usually much
higher.

That's why we need abstraction: to manage complexity. We need to make our own
parts in terms of smaller parts. Patterns in code that appear frequently are
extracted and given new names, and we pile layers upon layers of those. The
higher the layer, the larger the numbers of atomic parts under it, and
describing the structure of a larger piece of our artifact. At the top layer of
a big project, we are juggling with planets.

And it does kind of work, but given a big program you can easily visualize
changes in your mind that are super-costly, changes that would need rewriting
large portions of the program. Things like:
- the AST data structure once the parser is written,
- how memory is allocated,
- the templating language in which you wrote your web components,
- the weird code format the the team chose (ok, this one you can often change using tools)
- MORE AND BETTER EXAMPLES?

Once you have a large piece of software in place, some things are easy to
change, some are harder, and some of them are just too hard: they would affect
too many files in the project and would take too long. And that's why we need
architects, to nail the initial decisions about where to put the hinges
(interfaces, classes, APIs...). Anything that was not designed with change in
mind is probably set in stone, so it('d?) better be appropriate for the whole
lifetime of the project. What if you discover too late that your decisions were
wrong? Well, hello my dear failed project.

But why are certain changes so hard? What *is it* that makes them hard?

## Dependencies

Any piece of code that you can think of has many inter-dependent parts, tokens
or maybe groups of tokens that need to change in unison. Lets see a simple
example:

```cpp
double seqsum(const vector<double>& v) {
   double sum = 0.0;
   for (int i = 0; i < v.size(); i++) {
      sum += v[i];
   }
   return sum;
}
```

Now think about a single change you want to make, and then think which tokens
will have to change, like a "mental diff":
- swap the element type from ``double`` to ``float`` (3 changed tokens).
- compute the maximum instead of the sum (5 tokens), 
- change the name of the iterator variable (4 tokens),
- do the loop backwards (5+ tokens),
- use STL's ``iterator``s (10+ tokens).
- use a list, [or maybe not](https://isocpp.org/blog/2014/06/stroustrup-lists) (10+ tokens).
Ok, so what? Isn't this normal? Code is brittle, we already knew that. Everyone
knows it, especially beginners. When you learn to program, you try "making
changes", usually with terrible results.

And this is precisely the problem. Particular token groups in programs are
linked, a change to a single token in one of these groups will break the
program. We encourage programmers to avoid repetition (be DRY), make "single
points of control", "single sources of truth", and for a good reason. Yet our
programs are full of inter-dependent parts which need coordinated changes. The
lowest level has them, but you can find this "coordinated changes" problem at
all heights in the abstraction stack.

Wasn't abstraction supposed to help with that? We used abstraction to make
groups of parts be usable as a unit, yes. And groups of tokens that have to be
changed together seem good candidates. In the example, the ``seqsum`` function
makes it easier to calculate sums of sequences, given one parameter. But 


But as soon as we need any of the variations of ``seqsum``, the majority of them
involve coordinated changes and careful thinking (COUNTERARGUMENT: STL
algorithms). Any variation in the code could use some form of abstraction but we
only applied it to the whole function (because that's what the language offers
us). Clearly the abstraction mechanisms we are using are too granular. We need
to make abstraction pervasive and more fine-grained.

And you might think that advocating for abstraction to the limit is way too
much. Do we need to abstract every little group of tokens that need to change
together? It would make programs larger, would introduce new costs, and make
development more difficult, not less. And you would be right to a point, but
unless we eliminate every redundancy, we won't be able to truly control program
structure from the very top. 

A "fully abstracted" program should behave like a function of many independent
variables which generate your final code. You will, in fact, have one knob for
every single thing you might want to change, be it small, medium-sized, big or
global. To scale this, you should preserve orthogonality at all costs. Otherwise
we break the chain. Bigger programs will group symbols in lower programs that
need coordinated change but group all coordinated variables in a new
abstraction. But how could we do such a thing?

## Better program representations

Our program representations are quite far from the best possible. A good program
representation would make all changes be a single symbol, which underneath
changes the linked tokens. All the "traits" of a piece of code could then be
changed equally, no differences in effort to the whole spectrum of
modifications.


 





