
export class InvalidAssertError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidAssertError";
        this.message=message;
    }
}

export class Asserts {
    static AssertEquality(TargetValue: any, TestValue: any, FailureMessage: string) {
        if (TargetValue !== TestValue) { 
            throw new InvalidAssertError(FailureMessage);
        }
    }

    static AssertInequality(TargetValue: any, TestValue: any, FailureMessage: string) {
        if (TargetValue == TestValue) {
            throw new InvalidAssertError(FailureMessage);
        }
    }

    static AssertGreaterThan(TargetValue: any, TestValue: any, FailureMessage: string) {
        if (TargetValue > TestValue) {
            throw new InvalidAssertError(FailureMessage);
        }
    }

    static AssertGreaterThanOrEqual(TargetValue: any, TestValue: any, FailureMessage: string) {
        if (TargetValue >= TestValue) {
            throw new InvalidAssertError(FailureMessage);
        }
    }

    static AssertLessThan(TargetValue: any, TestValue: any, FailureMessage: string) {
        if (TargetValue < TestValue) {
            throw new InvalidAssertError(FailureMessage);
        }
    }

    static AssertLessThanOrEqual(TargetValue: any, TestValue: any, FailureMessage: string) {
        if (TargetValue <= TestValue) {
            throw new InvalidAssertError(FailureMessage);
        }
    }

}