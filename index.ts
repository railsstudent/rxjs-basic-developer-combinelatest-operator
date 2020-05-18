import { from, combineLatest } from 'rxjs'; 
import { map } from 'rxjs/operators';

const fruitsObject = {
  apple: {
    name: "apple",
    icon: "🍎",
    isFresh: true
  },
  banana: {
    name: "banana",
    icon: "🍎",
    isFresh: true
  },
  strawberry: {
    name: "strawberry",
    icon: "🍎",
    isFresh: true
  }
};

const LikedFruitsObject = {
  apple: 5,
  banana: 7,
  strawberry: 3
};

const fruits$ = from([fruitsObject]);
const likedFruits$ = from([LikedFruitsObject]);
const result$ = combineLatest(fruits$, likedFruits$);

result$
.pipe(map(
  ([a, b]) => {
    const customFruitsObject = Object.keys(b).reduce((acc, k) => {
      acc[k] = {
        ...a[k],
        likes: b[k]
      };
      return acc;
    }, a);
    return customFruitsObject;  
  })
)
.subscribe({
  next: v => console.log(v)
});