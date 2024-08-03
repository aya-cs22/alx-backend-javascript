interface MajorCredits{
    credits: number;
    brand : "Major";
}
interface MinorCredits
{
    credits: number;
    brand : "Minor";
}
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits){
    return subject1.credits + subject2.credits;
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits){
    return subject1.credits + subject2.credits;
}