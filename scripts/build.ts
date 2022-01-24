import { rmSync } from "fs"
import { compile } from "@digitak/tsc-esm"

console.log("Cleaning library...")
rmSync("binary", { recursive: true, force: true })

console.log("Compiling Typescript...")
compile()

console.log("Making binaries executable...")
