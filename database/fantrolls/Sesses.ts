import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";

export default class Sesses extends Quirk {
    private god: QuirkMutator;

    public constructor() {
        super("Sesses Choram");
        this.god = this.addMutator("God Quirk", "Sesses's typing quirk used when she ascends (prefixes sentences with \\ and ends them with //).", false);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("y", "yy");
        this.replaceString("e", "3");
        this.replaceString("s","S");


        if (this.god.active) {
          this.prefix("\\");
          this.suffix("//");

        }
    }
}
