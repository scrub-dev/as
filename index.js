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


const print = async () => {
    console.clear();
    Array.from({ length: (Math.floor(process.stdout.rows - asArray.length) / 2) }).forEach(() => console.log(''));
    for (let i = 0; i < asArray.length; i++) await (async s => (new Promise((r) => setTimeout(r, s * 1000))))(0.2).then(() => console.log(" ".repeat((Math.floor(process.stdout.columns - asArray[0].length) / 2))+asArray[i]))
    Array.from({ length: (Math.floor(process.stdout.rows - asArray.length) / 2) }).forEach(() => console.log(''));
}
print()



const one_liner = async () => {
    for(let i = 0; i < process.stdout.rows; i++)console.log(" ".repeat((Math.floor(process.stdout.columns - asArray[0].length) / 2)) + ((asArray[i - Math.floor((process.stdout.rows - asArray.length) / 2) - 1]) ? asArray[i - Math.floor((process.stdout.rows - asArray.length) / 2) - 1] : ""));
}

// one_liner()
