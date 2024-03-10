const asArray = [
 "[[[[[[[[[                                               ]]]]]]]]]",
 "[:::::::[                                               ]:::::::]",
 "[:::::::[                                               ]:::::::]",
 "[:::::[[[                                               ]]]:::::]",
 "[::::[        aaaaaaaaaaaaa             ssssssssss         ]::::]",
 "[::::[        a::::::::::::a          ss::::::::::s        ]::::]",
 "[::::[        aaaaaaaaa:::::a       ss:::::::::::::s       ]::::]",
 "[::::[                 a::::a       s::::::ssss:::::s      ]::::]",
 "[::::[          aaaaaaa:::::a        s:::::s  ssssss       ]::::]",
 "[::::[        aa::::::::::::a          s::::::s            ]::::]",
 "[::::[       a::::aaaa::::::a             s::::::s         ]::::]",
 "[::::[      a::::a    a:::::a       ssssss   s:::::s       ]::::]",
 "[:::::[[[   a::::a    a:::::a       s:::::ssss::::::s   ]]]:::::]",
 "[:::::::[   a:::::aaaa::::::a       s::::::::::::::s    ]:::::::]",
 "[:::::::[    a::::::::::aa:::a       s:::::::::::ss     ]:::::::]",
 "[[[[[[[[[     aaaaaaaaaa  aaaa        sssssssssss       ]]]]]]]]]",
]


const wait = (s) => new Promise((r) => setTimeout(r, s * 1000));

let printWidth = asArray[0].length;
let totalWidthMargin = process.stdout.columns - printWidth;
let widthMargin = Math.floor(totalWidthMargin / 2);

let printHeight = asArray.length;
let totalHeightMargin = process.stdout.rows - printHeight;
let heightMargin = Math.floor(totalHeightMargin / 2);

const print = async () => {
    console.clear();
    Array.from({ length: heightMargin }).forEach(() => console.log(''));
    for (let i = 0; i < asArray.length; i++) {
        await wait(0.2);
        console.log(" ".repeat(widthMargin)+asArray[i]);
    }
    Array.from({ length: heightMargin }).forEach(() => console.log(''));
}
print()