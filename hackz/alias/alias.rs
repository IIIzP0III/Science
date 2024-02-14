use rand::Rng;

fn generate_hacker_alias() -> String {
    let mut rng = rand::thread_rng();
    let adjectives = vec!["Elite", "Shadow", "Phantom"];
    let nouns = vec!["Coder", "Hacker", "Agent", "Cracker", "Imposter"];
    let numberz: u32 = rng.gen_range(1000..10000);

    let alias: String = format!(
        "{}{}{}",
        adjectives[rng.gen_range(0..adjectives.len())],
        nouns[rng.gen_range(0..nouns.len())],
        numberz
    );

    alias
}
fn main() {
    let alias = generate_hacker_alias();
    println!("Your hacker alias is: {}", alias);
}
